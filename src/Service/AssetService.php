<?php

namespace Systemcheck\CmsBundle\Service;

use Symfony\Component\Config\Loader\FileLoader;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AssetService {

    public function __construct(ContainerInterface $container) {
        $this->containerBuilder = $container;
    }

    public function getAssets() {
        $assets = \file_get_contents(__DIR__.'/../Resources/public/build/entrypoints.json');
        if($assets) {
            $assets = json_decode($assets);
        }
        $assets = $assets->entrypoints;
        return $assets;
    }
}