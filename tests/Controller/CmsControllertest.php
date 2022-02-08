<?php
namespace Systemcheck\CmsBundle\Tests\Controller;

use Systemcheck\CmsBundle\CmsBundle;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Routing\RouteCollectionBuilder;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CmsControllerTest extends WebTestCase
{
    public function testIndex()
    {
        //$client = static::createClient();
        $kernel = new KnpULoremIpsumControllerKernel();
        $client = new KernelBrowser($kernel);
        // Request a specific page
        $crawler = $client->request('GET', '/cms/');

        // Validate a successful response and some content
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Hello World');
    }
}

class KnpULoremIpsumControllerKernel extends Kernel
{
    protected function configureRoutes(RouteCollectionBuilder $routes)
    {
        $routes->import(__DIR__.'/../../src/Resources/config/routes.xml', '/api');
    }
}
