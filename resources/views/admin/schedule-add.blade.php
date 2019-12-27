@extends('layouts.admin-dashboard')
@section('title','Water Schedule Add')
@section('main-content')
 <div class="row">
		<div class="col-lg-12">
			<p class="text-center menu-title" style="font-size: 1.5em;"> <strong> Schedule {{ isset($schedule_edit_info) ? 'Update' : 'Add' }} </strong></p>
			<hr>	
		</div>
   <hr>
   <div class="col-lg-12">
   	<form action="{{ isset($schedule_edit_info) ? route('schedule_edit_submit', $schedule_edit_info->id) : route('schedule-submit') }}" class="form" enctype="multipart/form-data" method="{{ isset($schedule_edit_info) ? 'patch' : 'post' }}">

   		@csrf

	<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Select Ward Number</p>
                </div>		
                <div class="col-9">
				<select name="Ward_number" id="" class="form-control">
					<option value="1">Ward no 1</option>
					<option value="2">Ward no 2</option>
					<option value="3">Ward no 3</option>
					<option value="4">Ward no 4</option>
					<option value="5">Ward no 5</option>
					<option value="6">Ward no 6</option>
					<option value="7">Ward no 7</option>
					<option value="8">Ward no 8</option>
					<option value="9">Ward no 9</option>
				</select>
				</div>	
			</div>

			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Sunday</p>
                </div>		
                <div class="col-9">
				 <input type="text" name="Sunday"class="form-control" value="{{ @$schedule_edit_info->Sunday }}" placeholder="Please enter  the Timing " required autofocus>
				</div>	
			</div>
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Monday</p>
                </div>		
                <div class="col-9">
				 <input type="text" name="Monday"class="form-control" value="{{ @$schedule_edit_info->Monday }}" placeholder="Please enter  the Timing " required autofocus>
				</div>	
			</div>
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Tuesday</p>
                </div>		
                <div class="col-9">
				 <input type="text" name="Tuesday"class="form-control" value="{{ @$schedule_edit_info->Tuesday }}" placeholder="Please enter  the Timing " required autofocus>
				</div>	
			</div>
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Wednesday</p>
                </div>		
                <div class="col-9">
				 <input type="text" name="Wednesday"class="form-control" value="{{ @$schedule_edit_info->Wednesday }}" placeholder="Please enter  the Timing " required autofocus>
				</div>	
			</div>
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Thursday</p>
                </div>		
                <div class="col-9">
				 <input type="text" name="Thursday"class="form-control" value="{{ @$schedule_edit_info->Thursday }}" placeholder="Please enter  the Timing " required autofocus>
				</div>	
			</div>
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Friday</p>
                </div>		
                <div class="col-9">
				 <input type="text" name="Friday"class="form-control" value="{{ @$schedule_edit_info->Friday }}" placeholder="Please enter  the Timing " required autofocus>
				</div>	
			</div>
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Saturday</p>
                </div>		
                <div class="col-9">
				 <input type="text" name="Saturday"class="form-control" value="{{ @$schedule_edit_info->Saturday }}" placeholder="Please enter  the Timing " required autofocus>
				</div>	
			</div>

			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Status</p>
                </div>		
                <div class="col-9">
				 <select name="status" id="" class="form-control">
				 	<option value="active">Active</option>
				 	<option value="inactive">Inactive</option>
				 </select>
				</div>	
			</div>
			<div class="form-group row">
				<div class="col-3">
				
                </div>		
                <div class="col-9">
				<input type="submit" class="btn btn-success" value="{{ isset($schedule_edit_info) ? 'Update Schedule' : 'Add Schedule' }}">
				</div>	
			</div>



   	</form>
   </div>
@endsection