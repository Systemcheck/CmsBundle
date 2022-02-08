<?php

/*
* This file is part of the OrbitaleCmsBundle package.
*
* (c) Alexandre Rock Ancelet <alex@orbitale.io>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace Systemcheck\CmsBundle\Entity;
//namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\String\Slugger\AsciiSlugger;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @UniqueEntity("slug")
 * @ORM\Entity
 * @ORM\Table(name="cms__category")
 */
abstract class CmsCategory
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     *
     * @Assert\Type("string")
     * @Assert\NotBlank()
     */
    protected $name;

    /**
     * @var string
     *
     * @ORM\Column(name="slug", type="string", length=255, unique=true)
     *
     * @Assert\Type("string")
     * @Assert\NotBlank()
     */
    protected $slug;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     *
     * @Assert\Type("string")
     */
    protected $description;

    /**
     * @var bool
     *
     * @ORM\Column(name="enabled", type="boolean")
     *
     * @Assert\Type("bool")
     */
    protected $enabled = false;

    /**
     * @var Category
     *
     * @Assert\Type(Category::class)
     */
    protected $parent;

    /**
     * @var Category[]|ArrayCollection
     */
    protected $children;

    /**
     * @ORM\OneToMany(targetEntity=CmsPage::class, mappedBy="category")
     */
    private $pages;

    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->children  = new ArrayCollection();
        $this->pages     = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return (string) $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }

    public function getSlug(): string
    {
        return (string) $this->slug;
    }

    public function setSlug(?string $slug): void
    {
        $this->slug = (string) $slug;
    }

    public function isEnabled(): bool
    {
        return $this->enabled;
    }

    public function setEnabled(?bool $enabled = false): void
    {
        $this->enabled = (bool) $enabled;
    }

    public function getParent(): ?Category
    {
        return $this->parent;
    }

    public function setParent(?Category $parent): void
    {
        if ($parent === $this) {
            // Refuse the category to have itself as parent.
            $this->parent = null;

            return;
        }

        $this->parent = $parent;

        // Ensure bidirectional relation is respected.
        if ($parent && false === $parent->getChildren()->indexOf($this)) {
            $parent->addChild($this);
        }
    }

    /**
     * @return Category[]|ArrayCollection
     */
    public function getChildren()
    {
        return $this->children;
    }

    public function addChild(Category $category): void
    {
        $this->children->add($category);

        if ($category->getParent() !== $this) {
            $category->setParent($this);
        }
    }

    public function removeChild(Category $child): void
    {
        $this->children->removeElement($child);
    }



    public function getTree(string $separator = '/'): string
    {
        $tree = '';

        $current = $this;
        do {
            $tree    = $current->getSlug().$separator.$tree;
            $current = $current->getParent();
        } while ($current);

        return trim($tree, $separator);
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function updateSlug(): void
    {
        if (!$this->slug) {
            $this->slug = mb_strtolower((new AsciiSlugger())->slug($this->name)->toString());
        }
    }

    /**
     * @ORM\PreRemove()
     *
     * @param LifecycleEventArgs $event
     */
    public function onRemove(LifecycleEventArgs $event): void
    {
        $em = $event->getEntityManager();
        if (count($this->children)) {
            foreach ($this->children as $child) {
                $child->setParent(null);
                $em->persist($child);
            }
        }
        $this->enabled = false;
        $this->parent  = null;
        $this->name .= '-'.$this->getId().'-deleted';
        $this->slug .= '-'.$this->getId().'-deleted';
    }

    /**
     * @return Collection|CmsPage[]
     */
    public function getPages(): Collection
    {
        return $this->pages;
    }

    public function addPage(CmsPage $page): self
    {
        $this->children->add($page);
        if (!$this->pages->contains($page)) {
            $this->pages[] = $page;
            $page->setCategory($this);
        }

        return $this;
    }

    public function removePage(CmsPage $page): self
    {
        if ($this->pages->removeElement($page)) {
            // set the owning side to null (unless already changed)
            if ($page->getCategory() === $this) {
                $page->setCategory(null);
            }
        }

        return $this;
    }
}