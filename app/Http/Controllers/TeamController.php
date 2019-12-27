<?php

namespace App\Http\Controllers;

use App\Aboutus;
use App\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index(){
        $team = new Team;
        $team = Team::all();
        return view('admin.team')->with('Team_data', $team);
    }

    public function submit( Request $request){

        $team  = new Team;
        $this->validate($request, [
            'name' => 'required',
            'designation' => 'required',
            'fb' => 'required',
            'filepath' => 'required'

        ]);

        $team->name = $request->input('name');
        $team->designation = $request->input('designation');
        $team->status = $request->input('status');
        $team->fb = $request->input('fb');
        $team->image = $request->input('filepath');
        $success = $team->save();

        if ($success) {
            return redirect('admin/team')->with('status','Banner added Succesfully');
        }
    }


    public function edit($id){
        $team = new Team;
        $team = $team->find($id);
        if(!$team){
            return redirect('admin.team')->with('error','Banner Not Found');
        }else{
            return view('admin.team-add')->with('Team_edit_info',$team);
        }
    }


    public function team_edit_submit(Request $request, $id){

        $team = new Team;
        $team = $team->find($id);

        $this->validate($request, [
            'name' => 'required',
            'designation' => 'required',
            'fb' => 'required',
            'filepath' => 'required'

        ]);

        $team->name = $request->input('name');
        $team->designation = $request->input('designation');
        $team->status = $request->input('status');
        $team->fb = $request->input('fb');
        $team->image = $request->input('filepath');
        $success = $team->save();

        if ($success) {
            return redirect('admin/team')->with('status','Added member');
        }

    }

    public function aboutus_update( Request $request){
        $about = new Aboutus;
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required',


        ]);
        $about->title = $request->input('title');
        $about->content = $request->input('content');
        $success = $about->save();

        if ($success){
            return redirect('admin/about-mgmt')->with('status', 'Updated');
        }


    }
}
