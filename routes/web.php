<?php

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

Route::get('/','FrontendController@index')->name('landing');
Route::get('/about-us' , 'FrontendController@about_us')->name('about-us');

Route::get('/contact-us',function(){
    return view('home.section.contact-us');
})->name('contact-us');

Route::post('/feedback', 'FeedbackController@submit')->name('feedback');
Route::get('/water_schedule','FrontendController@schedule')->name('water_schedule');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/test', function(){
	return view('layouts.admin-dashboard');
});

// route for admin
Route::group(['prefix'=>'admin','middleware'=>['auth','admin']], function(){
	 Route::get('/','HomeController@admin')->name('admin');

	 Route::get('/filemanager', function(){
	 	return view('admin.filemanager');
	 })->name('filemanager');



// for Banner Management
	Route::get('/banner-management', 'BannerController@banner_list')->name('banner-mgmt');
	Route::get('/banner-add',function(){
		return view('admin.banner-add');
	})->name('banner-add');

	Route::post('/banner-submit','BannerController@submit')->name('banner-submit');

	Route::get('/banner-edit/edit{id}', 'BannerController@Banner_Edit')->name('banner_edit');
	Route::get('/banner_edit_submit{id}','BannerController@Banner_Edit_Submit')->name('banner_edit_submit');
	Route::get('/banner_delete/delete{id}','BannerController@Banner_Delete')->name('banner_delete');



// for Schedule Management
	Route::get('/schedule','ScheduleController@schedule_list')->name('schedule-mgmt');
	Route::get('/schedule-add',function(){
		return view('admin.schedule-add');

	})->name('schedule-add');

	Route::post('schedule-submit','ScheduleController@submit')->name('schedule-submit');

	Route::get('/schedule-edit/edit{id}','ScheduleController@schedule_edit')->name('schedule_edit');

	Route::get('/schedule_edit_submit{id}','ScheduleController@schedule_edit_submit')->name('schedule_edit_submit');

	Route::get('/schedule-delete/del{id}', 'ScheduleController@schedule_delete')->name('schedule-delete');

	// For Gallery Management

	Route::get('/gallery','GalleryController@gallery_list')->name('gallery');

	Route::get('/gallery_add',function(){
		return view('admin.gallery-add');
	})->name('gallery_add');

	Route::post('/gallery_submit','GalleryController@submit')->name('gallery_submit');

	Route::get('/gallery_edit/edit{id}','GalleryController@edit')->name('gallery_edit');

	Route::get('/gallery_edit_submit{id}','GalleryController@gallery_edit_submit')->name('gallery_edit_submit');

	Route::get('/gallery_delete/del{id}','GalleryController@delete')->name('gallery_delete');





	// fianance matter

	Route::get('/finance',function(){
		return view('finance.dashboard');
	})->name('finance');

	Route::get('/invoice', function(){
	    return view('finance.invoice');
    })->name('invoice');

	//team
    Route::get('/team', 'TeamController@index')->name('team');
    Route::get('/team-add', function(){
        return view('admin.team-add');
    })->name('team-add');
    Route::post('/team-submit','TeamController@submit')->name('team-submit');
    Route::get('/team_edit/edit{id}','TeamController@edit')->name('team-edit');

    Route::get('/team_edit_submit{id}', 'TeamController@team_edit_submit')->name('team_edit_submit');

    Route::get('/bills', 'FinanceController@list')->name('bills');
    Route::get('/bill-add','FinanceController@bill_add')->name('bill-add');
    Route::post('/bill-submit','FinanceController@submit')->name('submit');

    Route::post('/view_bill', 'FinanceController@view_bill')->name('view_bill');
    Route::get('/settlement','FinanceController@settlement')->name('settlement');

    Route::get('/bill_edit/edit{id}' , 'FinanceController@bill_edit')->name('bill_edit');

    Route::get('/bill_edit_submit/edit{id}', 'FinanceController@bill_edit_submit')->name('bill_edit_submit');
    Route::get('/bill_delete/del{id}', 'FinanceController@bill_delete')->name('bill_delete');

//    About Page
    Route::get('/about-mgmt', function(){
        return view('admin.aboutus-mgmt');
    })->name('about-mgmt');

    Route::post('/aboutus_update', 'TeamController@aboutus_update')->name('aboutus_update');




});


//router for customers
Route::group(['prefix'=>'customer','middleware'=>['auth','customer']], function(){
	 Route::get('/','HomeController@customer')->name('customer');
});


Route::group(['middleware' => 'auth'], function () {
    Route::get('/laravel-filemanager', '\UniSharp\LaravelFilemanager\Controllers\LfmController@show');
    Route::post('/laravel-filemanager/upload', '\UniSharp\LaravelFilemanager\Controllers\UploadController@upload');
    // list all lfm routes here...
});
