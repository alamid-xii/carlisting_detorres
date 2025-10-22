<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('id_product')->primary();
            $table->timestamps();
            $table->string('name')->unique();
            $table->decimal('price');
            $table->foreignId('id_category')->constrained('categories', 'id_category')->onDelete('cascade');
            $table->foreignId('id_supply')->constrained('supplies', 'id_supply')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
