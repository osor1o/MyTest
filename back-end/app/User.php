<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;
use App\Helpers\Gravatar;

class User extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    protected $table = 'User';
    protected $fillable = [ 'email', 'username', 'password', 'name' ];
    protected $hidden = [ 'password' ];
    protected $appends = [ 'gravatar' ];

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = md5($password);
    }

    public function setUsernameAttribute($username)
    {
        $this->attributes['username'] = mb_strtolower($username);
    }

    public function getGravatarAttribute()
    {
        $email = $this->attributes['email'];
        return Gravatar::getImageUrl($email);
    }
}
