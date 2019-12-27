@extends('layouts.admin-dashboard')
@section('title' , 'Gallery | Talku Khanepani')

@section('main-content')
<div class="row">
  	<div class="col-lg-9">
  		<h3>Gallery Management</h3>
      @if(session('status'))
		  <div class=" alert alert-success" style="margin: 0px; padding: 0px;">
			 {{ session('status')  }}
           </div>
	  @endif
  	</div>
  	<div class="col-lg-3">
  		<a href="{{ route('gallery_add') }}" class="btn btn-outline-info"><i class="mdi mdi-plus menu-icon"></i> Add Image</a>
  	</div>
   </div>
   <hr>
   <div class="row">
   	<div class="col-lg-12">
   		<table class="table-striped table  table-hover">
   			<thead>
   				<tr>
   					<th>Title</th>
   					<th>Image</th>
   					<th>Description</th>
   					<th>Taken At</th>
   					<th>Status</th>
   					<th>Action</th>
   				</tr>
   			</thead>
   			<tbody>
   				@foreach( $Gallery_info as $Gallery_info)
   				<tr>
   					<td>{{$Gallery_info->title}}</td>
   					<td><img src="{{ $Gallery_info->image }}" alt=""></td>
   					<td>{{ $Gallery_info->description }}</td>
   					<td>{{ $Gallery_info->taken_at }}</td>
   					<td>{{ $Gallery_info->status }}</td>
   					<td>
   						<a href="{{ route('gallery_edit', $Gallery_info->id) }}">Edit</a> |
   						<a href="{{ route('gallery_delete', $Gallery_info->id) }}">Delete</a>

   					</td>
   				</tr>
   				@endforeach
   			</tbody>
   		</table>
   	</div>
   </div>
@endsection