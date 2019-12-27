<?php

namespace App\Http\Controllers;
use App\Schedule;

use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function submit(Request $request){
    	$schedule = new Schedule;
    	//dd($request);
    	$this->validate($request, [
    		'Ward_number' => 'required',
    		'Sunday' => 'required',
    		'Monday' => 'required',
    		'Tuesday' => 'required',
    		'Wednesday' => 'required',
    		'Thursday' => 'required',
    		'Friday' => 'required',
    		'Saturday' => 'required',
    		'status' => 'required'
    	]);
    	//dd($request);
    	$schedule->Ward_number = $request->input('Ward_number');
    	$schedule->Sunday = $request->input('Sunday');
    	$schedule->Monday = $request->input('Monday');
    	$schedule->Tuesday = $request->input('Tuesday');
    	$schedule->Wednesday = $request->input('Wednesday');
    	$schedule->Thursday = $request->input('Sunday');
    	$schedule->Friday = $request->input('Sunday');
    	$schedule->Saturday = $request->input('Sunday');
    	$schedule->status = $request->input('status');
    	$success= $schedule->save();

    	if ($success) {
    		return redirect('admin/schedule')->with('status','Schedule Added Successfully');
    	}
    }

    public function schedule_list(){
    	$schedule = new Schedule;
    	$schedule = Schedule::all();
    	return view('admin.schedule')->with('Schedule_info', $schedule);

    }

    public function schedule_edit($id){
    	$schedule = new Schedule;
    	$schedule = $schedule->find($id);

    	if (!$schedule) {
    		return redirect('admin/schedule')->with('error','Schedule not Found');
    	}else{
    		return view('admin.schedule-add')->with('schedule_edit_info', $schedule);
    	}
    }


    public function schedule_edit_submit(Request $request, $id){
    	$schedule = new schedule;
    	$schedule = $schedule->find($id);

    	$this->validate($request, [
    		'Ward_number' => 'required',
    		'Sunday' => 'required',
    		'Monday' => 'required',
    		'Tuesday' => 'required',
    		'Wednesday' => 'required',
    		'Thursday' => 'required',
    		'Friday' => 'required',
    		'Saturday' => 'required',
    		'status' => 'required'
    	]);
    	//dd($request);
    	$schedule->Ward_number = $request->input('Ward_number');
    	$schedule->Sunday = $request->input('Sunday');
    	$schedule->Monday = $request->input('Monday');
    	$schedule->Tuesday = $request->input('Tuesday');
    	$schedule->Wednesday = $request->input('Wednesday');
    	$schedule->Thursday = $request->input('Sunday');
    	$schedule->Friday = $request->input('Sunday');
    	$schedule->Saturday = $request->input('Sunday');
    	$schedule->status = $request->input('status');
    	$success= $schedule->save();

    	if ($success) {
    		return redirect('admin/schedule')->with('status','Schedule Updated successfully');
    	}
    	else{
    		return redirect('admin/schedule')->with('error','Schedule Not Found');
    	}
    }


    public function schedule_delete($id){
    	$schedule = new Schedule;
    	$schedule = $schedule->find($id);
    	if ($schedule) {
    		$schedule->delete($id);
    		return redirect('admin/schedule')->with('status' ,'Schedule Deleted Successfully');
    	}else{
    		return redirect('admin/schedule')->with('error','Schedule Not Found');
    	}
    }

}
