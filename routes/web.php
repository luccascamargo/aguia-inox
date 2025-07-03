<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/empresa', function () {
    return Inertia::render('empresa');
})->name('empresa');

Route::get('/produtos', function () {
    return Inertia::render('produtos/index');
})->name('produtos');

Route::get('/produtos/{slug?}', function ($slug = null) {
    return Inertia::render('produtos/show', ['slug' => $slug]);
})->name('produtos.show');

Route::get('/news', function () {
    return Inertia::render('news/index');
})->name('news');

Route::get('/news/{slug}', function ($slug) {
    return Inertia::render('news/show', ['slug' => $slug]);
})->name('news.show');

Route::get('/contato', function () {
    return Inertia::render('contato');
})->name('contato');

Route::get('/trabalhe-conosco', function () {
    return Inertia::render('trabalhe-conosco');
})->name('trabalhe-conosco');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
