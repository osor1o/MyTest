<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\User;

class AccountActivationCode extends Mailable
{
    use Queueable, SerializesModels;

    private $data = [];

    public function __construct(User $user)
    {
        $this->data['name'] = $user->name;
        $this->data['link'] = $this->generateLink($user);
    }

    private function generateLink(User $user)
    {
        $hash = md5($user->created_at);
        $url = url('/activate');
        $link = "{$url}/{$user->id}/{$hash}";
        return $link;
    }

    public function build()
    {
        return $this->view('mail.ActivateAcount', $this->data);
    }
}