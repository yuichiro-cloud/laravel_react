<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
    //     return view('welcome');
    // });
    Auth::routes(['verify' => true]);

    Route::get('/register', 'ReactController@index')->name('register');
    Route::get('password/reset', 'ReactController@index')->name('password.request');
    Route::get('password/reset/{token}', 'ReactController@index')->name('password.reset');
    Route::get('email/verify', 'ReactController@index')->name('verification.notice');

    Route::get('/{router}', 'ReactController@index')->name('home');


// Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
