<?php

namespace Systemcheck\CmsBundle\Service;

use Symfony\Component\Config\Loader\FileLoader;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class ExtensionService {

    public function __construct(ContainerInterface $container) {
        $this->containerBuilder = $container;
    }

    public function availableExtension() {
        
        
        $components[] = array(
            'name' => 'Seite',
            'type' => 'component',
            'entity' => 'CmsPage'
        );

        $extensions = array(['components' => $components], ['blocks'], ['plugins']);
        return $extensions;
    }

    public function getBlocks() {
        //$loader = new YamlFileLoader($this->cont, new FileLocator(__DIR__.'/../Resources/config'));
        $value = Yaml::parseFile(__DIR__.'/../Resources/config/blocks.yaml');
        $blocks[] = array(
            'type' => 'header',
            'data' => [
                "text" => "This is my awesome editor!",
                "level" =>  1
            ]
        );
        return $value;
    }
}