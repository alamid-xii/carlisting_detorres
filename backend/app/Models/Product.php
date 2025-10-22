<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_product';

    protected $fillable = [
        'name',
        'price',
    ];

    public function Category(){
        return $this->belongsTo(Category::class, 'id_category', 'id_category');
    }

    public function Stock(){
        return $this->hasOne(Stock::class, 'id_stock', 'id_stock');
    }

    public function Supply(){
        return $this->belongsTo(Supply::class, 'id_supply', 'id_supply');
    }


}
