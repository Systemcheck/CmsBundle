<?php

namespace Systemcheck\CmsBundle;

use Systemcheck\CmsBundle\DependencyInjection\CmsExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class CmsBundle extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__).'/src';
    }

    public function getContainerExtension()
    {
        return new CmsExtension();
    }
}