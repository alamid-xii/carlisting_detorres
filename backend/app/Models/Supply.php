<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supply extends Model
{
    //
    use HasFactory;

    protected $primaryKey = 'id_supply';

    protected $fillable = [
        'name',
        'contact_info',
    ];

    public function Product(){
        return $this->hasMany(Product::class, 'id_product', 'id_product');
    }
}
