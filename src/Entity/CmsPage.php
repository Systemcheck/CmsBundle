<?php

declare(strict_types=1);

/*
 * This file is part of the ConnectHolland CookieConsentBundle package.
 * (c) Connect Holland.
 */

namespace Systemcheck\CmsBundle\Entity;
//namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="cms__page")
 */
class CmsPage
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;


    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $metaKeywords;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $metaDescription;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $seoUrl;


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $metaTitle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $robots;
    
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $author;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdDate;

    /**
     * @ORM\Column(type="datetime")
     */
    private $modifiedDate;


    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $blocks = [];

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $sections = [];

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $options = [];

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isHomepage;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $active;

    /**
     * @ORM\ManyToOne(targetEntity=CmsCategory::class, inversedBy="cmsPages")
     */
    private $category;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(?string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getCreatedDate(): ?\DateTimeInterface
    {
        return $this->createdDate;
    }

    public function setCreatedDate(\DateTimeInterface $createdDate): self
    {
        $this->createdDate = $createdDate;

        return $this;
    }

    public function getModifiedDate(): ?\DateTimeInterface
    {
        return $this->modifiedDate;
    }

    public function setModifiedDate(\DateTimeInterface $modifiedDate): self
    {
        $this->modifiedDate = $modifiedDate;

        return $this;
    }

    public function getMetaKeywords(): ?string
    {
        return $this->metaKeywords;
    }

    public function setMetaKeywords(?string $keywords): self
    {
        $this->metaKeywords = $keywords;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->metaDescription;
    }

    public function setDescription(?string $metaDescription): self
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    public function getSeoUrl(): ?string
    {
        return $this->seoUrl;
    }

    public function setSeoUrl(string $seoUrl): self
    {
        $this->seoUrl = $seoUrl;

        return $this;
    }

    public function __toString() {
        return $this->name;
    }

    public function getMetaDescription(): ?string
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(?string $metaDescription): self
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    public function getMetaTitle(): ?string
    {
        return $this->metaTitle;
    }

    public function setMetaTitle(string $metaTitle): self
    {
        $this->metaTitle = $metaTitle;

        return $this;
    }

    public function getRobots(): ?string
    {
        return $this->robots;
    }

    public function setRobots(string $robots): self
    {
        $this->robots = $robots;

        return $this;
    }

    public function getBlocks(): ?array
    {
        return $this->blocks;
    }

    public function setBlocks(?array $blocks): self
    {
        $this->blocks = $blocks;

        return $this;
    }

    public function getSections(): ?array
    {
        return $this->sections;
    }

    public function setSections(?array $sections): self
    {
        $this->sections = $sections;

        return $this;
    }

    public function getOptions(): ?array
    {
        return $this->options;
    }

    public function setOptions(?array $options): self
    {
        $this->options = $options;

        return $this;
    }

    public function getIsHomepage(): ?bool
    {
        return $this->isHomepage;
    }

    public function setIsHomepage(?bool $isHomepage): self
    {
        $this->isHomepage = $isHomepage;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getCategory(): ?CmsCategory
    {
        return $this->category;
    }

    public function setCategory(?CmsCategory $category): self
    {
        $this->category = $category;

        return $this;
    }
}
