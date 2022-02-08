<?php

namespace Systemcheck\CmsBundle\Controller;

use Systemcheck\CmsBundle\Entity\CmsPage;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use Systemcheck\CmsBundle\Service\AssetService;
use Systemcheck\CmsBundle\Service\ExtensionService;

class CmsController extends AbstractController
{
    
    /**
     * @Route("/cms/{slug}", name="cms")
     */
    public function index($slug = 'home', $component = 'page', AssetService $assetService): Response
    {
        $page = $this->getDoctrine()->getRepository(CmsPage::class)->findOneBy(['seoUrl' => $slug]);
        //@CHCookieConsent
        if($page == null) {
            $page = $this->createFirstPage();
            //dd($page);
        };
        $assets = $assetService->getAssets();

        return $this->render('@Cms/index.html.twig',[
            'page' => $page,
            'assets' => $assets->cms
        ]);
    }

    /**
     * @Route("/cms-editor", name="cms.editor")
     */
    public function cmsEditor(ExtensionService $extService,AssetService $assetService): Response
    {
        if(!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }
        $this->denyAccessUnlessGranted('ROLE_SUPERADMIN');

        $extensions = $extService->availableExtension();
        $assets = $assetService->getAssets();

        return $this->render('@Cms/editor/index.html.twig',[
            'extensions' => $extensions,
            'assets' => $assets,
            'blocks' => $extService->getBlocks()
        ]);
    }
    
    /**
     * @Route("/cms-editor/pages/{id}", name="cms.editor.pages")
     */
    public function cmsEditorPages($id = null, ExtensionService $extService,AssetService $assetService): Response
    {
        if(!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }
        $this->denyAccessUnlessGranted('ROLE_SUPERADMIN');
        $extensions = $extService->availableExtension();
        $assets = $assetService->getAssets();
        
        if($id != null) {
            $page = $this->getDoctrine()->getRepository(CmsPage::class)->findOneBy(['id' => $id]);
            return $this->render('@Cms/editor/edit-page.html.twig',[
                'extensions' => $extensions,
                'assets' => $assets,
                'blocks' => $extService->getBlocks(),
                'page' => $page
            ]);
        } else {
            $pages = $this->getDoctrine()->getRepository(CmsPage::class)->findAll();
            return $this->render('@Cms/editor/pages.html.twig',[
                'pages' => $pages,
                'assets' => $assets,
            ]);
        }
        

        
    }

    /**
     * @Route("/cms-editor/page/new", name="cms.editor.new.page")
     */
    public function cmsEditorNewPage(Request $request,ExtensionService $extService,AssetService $assetService): Response
    {
        if(!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }
        $this->denyAccessUnlessGranted('ROLE_SUPERADMIN');
        $extensions = $extService->availableExtension();
        $assets = $assetService->getAssets();
        $page = $this->createNewPage();
        $this->getDoctrine()->getManager()->persist($page);
        $this->getDoctrine()->getManager()->flush();
        return $this->redirectToRoute('cms.editor.page.edit', [
            'id' => $page->getId()
        ]);
        return $this->render('@Cms/editor/edit-page.html.twig',[
            'extensions' => $extensions,
            'assets' => $assets,
            'blocks' => $extService->getBlocks(),
            'page' => $page
        ]);

    }

    /**
     * @Route("/cms-editor/page/edit/{id}", name="cms.editor.page.edit")
     */
    public function cmsEditorEditPage($id = null, Request $request,ExtensionService $extService,AssetService $assetService): Response
    {
        if(!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }
        $this->denyAccessUnlessGranted('ROLE_SUPERADMIN');
        $page = $this->getDoctrine()->getRepository(CmsPage::class)->findOneBy(['id' => $id]);
        
        if($request->getMethod() == 'POST') {
            $page->setName($request->request->get('name'))
                ->setModifiedDate(new \Datetime)
                ->setSeoUrl($request->request->get('seoUrl'))
                ->setMetaTitle($request->request->get('title'))
                ->setMetaDescription($request->request->get('metaDescription'))
                ->setMetaKeywords($request->request->get('metaKeywords'))
                ->setRobots($request->request->get('metaDescription'));
                $this->getDoctrine()->getManager()->persist($page);
            $this->getDoctrine()->getManager()->flush();
        };
        
        $extensions = $extService->availableExtension();
        $assets = $assetService->getAssets();
        
        
        return $this->render('@Cms/editor/edit-page.html.twig',[
            'extensions' => $extensions,
            'assets' => $assets,
            'blocks' => $extService->getBlocks(),
            'page' => $page
        ]);

    }

    /**
     * @Route("/cms-editor/page/saveBlocks/{id}", name="cms.editor.page.save.blocks")
     */
    public function cmsEditorSavePageBlocks($id = null, Request $request,ExtensionService $extService,AssetService $assetService): Response
    {
        if(!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }
        $this->denyAccessUnlessGranted('ROLE_SUPERADMIN');

        
        $data = json_decode($request->getContent(),true);
        
        $extensions = $extService->availableExtension();
        $assets = $assetService->getAssets();
        $page = $this->getDoctrine()->getRepository(CmsPage::class)->findOneBy(['id' => $id]);
        $page->setBlocks($data['blocks']);
        $this->getDoctrine()->getManager()->flush();
        return $this->json(['success']);

    }

    /**
     * @Route("/cms-editor-api/page/saveSections/{id}", name="cms.editor.api.save.sections")
     */
    public function cmsEditorSavePageSections($id = null, Request $request,ExtensionService $extService,AssetService $assetService): Response
    {
        if(!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }
        $this->denyAccessUnlessGranted('ROLE_SUPERADMIN');

        
        $data = json_decode($request->getContent(),true);
        
        $extensions = $extService->availableExtension();
        $assets = $assetService->getAssets();
        $page = $this->getDoctrine()->getRepository(CmsPage::class)->findOneBy(['id' => $id]);
        $page->setSections($data);
        $this->getDoctrine()->getManager()->flush();
        return $this->json(['success']);

    }

    public function createFirstPage() {
        $page = new CmsPage;
        /*$blocks[] = array(
            'type' => 'home',
            'title' => 'Vendery',
            'subtitle' => 'Dein neues Shopping Erlebnis',
            'text' => 'Willkommen zum nächsten Level des E-Commerce. Persönlicher. Transparenter. Informativer. Erlebe Produkte durch den Bildschirm, wie als wären sie bei dir vor Ort.',
            'image' => '/img/demos/startup-agency/backgrounds/morphing-bg-1.jpg',
            'classes' => array('font-weight-bold', 'text-10', 'mb-4', 'appear-animation', 'animated', 'fadeInUpShorter', 'appear-animation-visible')
        );*/
        
        $blocks[] = array(
            'type' => 'header',
            'data' => [
                'text' => 'Meine Überschrift',
                'level' => '1'
            ],
            'title' => 'title',
            'content' => 'content',
            'element' => 'h3',
            'classes' => array('font-weight-bold', 'text-10', 'mb-4', 'appear-animation', 'animated', 'fadeInUpShorter', 'appear-animation-visible')
        );

        $blocks[] = array(
            'type' => 'paragraph',
            'data' => [
                'text' => 'text',
                'level' => '2'
            ],
            
            'content' => 'content',
            'element' => 'p',
            'classes' => array('font-weight-bold', 'text-10', 'mb-4', 'appear-animation', 'animated', 'fadeInUpShorter', 'appear-animation-visible')
        );
        $sections[] = array(
            'id' => 'main',
            'element' => 'section',
            'classes' => '',
            'columns' => [
                1 => ['blocks' => [0]]
            ]
        );

        $sections[] = array(
            'id' => 'main',
            'element' => 'section',
            'classes' => '',
            'columns' => [
                0 => ['blocks' => [1]],
                1 => ['blocks' => [0]]
            ]
        );
        $page->setName('Neue Seite')
            ->setMetaTitle('Neue Seite')
            ->setMetaDescription('My Awesome MetaDescription')
            ->setMetaKeywords('My, Awesome, MetaKeywords')
            ->setcreatedDate(new \Datetime)
            ->setModifiedDate(new \Datetime)
            ->setSeoUrl('home')
            ->setAuthor('Systemcheck')
            ->setIsHomepage(true)
            //->setSections()
            ->setBlocks($blocks)
            ->setActive(true);
        return $page;
    }

    public function createNewPage() {
        $page = new CmsPage;
        /*$blocks[] = array(
            'type' => 'home',
            'title' => 'Vendery',
            'subtitle' => 'Dein neues Shopping Erlebnis',
            'text' => 'Willkommen zum nächsten Level des E-Commerce. Persönlicher. Transparenter. Informativer. Erlebe Produkte durch den Bildschirm, wie als wären sie bei dir vor Ort.',
            'image' => '/img/demos/startup-agency/backgrounds/morphing-bg-1.jpg',
            'classes' => array('font-weight-bold', 'text-10', 'mb-4', 'appear-animation', 'animated', 'fadeInUpShorter', 'appear-animation-visible')
        );*/
        
        $blocks[] = array(
            'type' => 'header',
            'data' => [
                'text' => 'Meine Überschrift',
                'level' => '1'
            ],
            'title' => 'title',
            'content' => 'content',
            'element' => 'h3',
            'classes' => array('font-weight-bold', 'text-10', 'mb-4', 'appear-animation', 'animated', 'fadeInUpShorter', 'appear-animation-visible')
        );

        $blocks[] = array(
            'type' => 'paragraph',
            'data' => [
                'text' => 'text',
                'level' => '2'
            ],
            
            'content' => 'content',
            'element' => 'p',
            'classes' => array('font-weight-bold', 'text-10', 'mb-4', 'appear-animation', 'animated', 'fadeInUpShorter', 'appear-animation-visible')
        );
        $sections[] = array(
            'id' => 'main',
            'element' => 'section',
            'classes' => '',
            'columns' => [
                1 => ['blocks' => [0]]
            ]
        );

        $sections[] = array(
            'id' => 'main',
            'element' => 'section',
            'classes' => '',
            'columns' => [
                0 => ['blocks' => [1]],
                1 => ['blocks' => [0]]
            ]
        );
        $page->setName('Neue Seite')
            ->setMetaTitle('Neue Seite')
            ->setMetaDescription('My Awesome MetaDescription')
            ->setMetaKeywords('My, Awesome, MetaKeywords')
            ->setcreatedDate(new \Datetime)
            ->setModifiedDate(new \Datetime)
            ->setSeoUrl('neue-seite')
            ->setAuthor('Systemcheck')
            ->setIsHomepage(false)
            //->setSections()
            ->setBlocks($blocks)
            ->setActive(true);
        return $page;
    }
}