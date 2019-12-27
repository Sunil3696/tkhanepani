@extends('layouts.admin-dashboard')
@section('title','Schedule Management')
@section('main-content')

 <div class="row">
  	<div class="col-lg-9">
  		<h3>Water Schedule Management</h3>
      @if(session('status'))
                    <div class=" alert alert-success" style="margin: 0px; padding: 0px;">
                        {{ session('status')  }}
                    </div>
                    @endif
  	</div>
  	<div class="col-lg-3">
  		<a href="{{ route('schedule-add') }}" class="btn btn-outline-info"><i class="mdi mdi-plus menu-icon"></i> Add
                        Schedule</a>

  	</div>

   </div>
   <hr>

   <div class="row">
   	<div class="col-12">
   		<table class="table table-striped table-hover">
   			<thead>
   				<tr>
   					<th>Ward no </th>
   					<th>Sun</th>
   					<th>Mon</th>
   					<th>Tue</th>
   					<th>Wed</th>
   					<th>Thu</th>
   					<th>Fri</th>
   					<th>Sat</th>
            <th>Status</th>
   					<th>Action</th>
   				</tr>
   			</thead>
   			<tbody>
            <tr>
   				 @foreach($Schedule_info as $Schedule_info)
         <td>{{ $Schedule_info->Ward_number }}</td>
         <td>{{ $Schedule_info->Sunday }}</td>
         <td>{{ $Schedule_info->Monday }}</td>
         <td>{{ $Schedule_info->Tuesday }}</td>
         <td>{{ $Schedule_info->Wednesday }}</td>
         <td>{{ $Schedule_info->Thursday }}</td>
         <td>{{ $Schedule_info->Friday }}</td>
         <td>{{ $Schedule_info->Saturday }}</td>
         <td>{{ $Schedule_info->status }}</td>
         <td>
           <a href="{{ route('schedule_edit', $Schedule_info->id) }}">Edit</a>
           <a href="{{ route('schedule-delete', $Schedule_info->id) }}">Delete</a>
         </td>


       </tr>
           @endforeach
   			</tbody>
   			
   		</table>
   		
   	</div>
   </div>

@endsection