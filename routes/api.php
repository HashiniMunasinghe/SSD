<?php

use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\BookResource;
use App\Models\Book;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Route to retrieve all the books from the db
Route::get('/books', function(){
    return BookResource::collection(Book::all());
});

// Route to find specific book
Route::get('/book/{id}', function($id){
    return new BookResource(Book::findOrFail($id));
});

// Route to create a book
Route::post('/book', [BookController::class, 'store']);

// Route to update details of a book
Route::put('/book/{id}', [BookController::class, 'update']);

// Route to delete a book
Route::delete('/book/{id}', [BookController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
