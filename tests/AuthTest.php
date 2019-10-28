<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class AuthTest extends TestCase
{
    use DatabaseTransactions;

    private $data;

    public function setUp(): void
    {
        parent::setUp();
        $this->data = [
            //
        ];
    }

    // TODO
    // auth success
    // fields required
    // account not actived
}
