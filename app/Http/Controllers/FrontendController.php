<?php

namespace App\Http\Controllers;
use App\Aboutus;
Use App\Banner;

use App\Feedback;
use App\Gallery;
use App\Schedule;
use App\Team;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index(){
        $banner = new Banner();
        $gallery = new Gallery;
        $team = new Team;
        $team = Team::all();
        $gallery = Gallery::all();
        $banner = Banner::all()->where('status', "=" , 'active');
        $feedback = new Feedback;
        $feedback = Feedback::all();
        $aboutus = new Aboutus;
        $aboutus = Aboutus::all();


    	return view('home.index')
            ->with('aboutus_data', $aboutus)
            ->with('feedback_data' , $feedback)
            ->with('gallery_data', $gallery)
            ->with('team_info', $team )
            ->with('banner_data', $banner);
    }


    public function about_us(){

        $feedback = new Feedback;
        $feedback = Feedback::all();
        $banner = new Banner();
        $gallery = new Gallery;
        $team = new Team;
        $team = Team::all();
        $gallery = Gallery::all();
        $banner = Banner::all();
        $aboutus = new Aboutus;
        $aboutus = Aboutus::all();


        return view('home.section.aboutus')
            ->with('aboutus_data', $aboutus)
            ->with('feedback_data' , $feedback)
            ->with('gallery_data', $gallery)
            ->with('team_info', $team )
            ->with('banner_data', $banner);

}

    public function schedule(){
        $schedule = new Schedule;
        $schedule = $schedule->all();
        return view('home.section.fschedule')->with('schedule_data', $schedule);
    }


}
