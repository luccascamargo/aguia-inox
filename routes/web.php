<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/empresa', function () {
    return Inertia::render('empresa');
})->name('empresa');

Route::get('/produtos', function () {
    return Inertia::render('produtos/index');
})->name('produtos');

Route::get('/busca', function () {
    return Inertia::render('busca');
})->name('busca');

Route::get('/produtos/{slug?}', function ($slug = null) {
    return Inertia::render('produtos/show', ['slug' => $slug]);
})->name('produtos.show');

Route::get('/produtos/{slug}/opcionais', function ($slug) {
    return Inertia::render('produtos/opcionais', ['slug' => $slug]);
})->name('produtos.opcionais');

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

require __DIR__.'/auth.php';
