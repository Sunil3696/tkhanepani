@extends('layouts.admin-dashboard')

@section('main-content')
  <div class="row">
  	<div class="col-lg-9">
  		<h3>Banner Management</h3>
      @if(session('status'))
                    <div class=" alert alert-success" style="margin: 0px; padding: 0px;">
                        {{ session('status')  }}
                    </div>
                    @endif
  	</div>
  	<div class="col-lg-3">
  		<a href="{{ route('banner-add') }}" class="btn btn-outline-info"><i class="mdi mdi-plus menu-icon"></i> Add
                        Banner</a>

  	</div>

   </div>
   <hr>

    <div class="row">
    	<div class="col-lg-12">
                <table class="table table-striped table-hover">
                    <thead>
                    <tr>

                        <th>Banner Name</th>
                        <th>Image</th>
                        <th>Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($Banner_info as $banner_info)
                        <tr>
                            <td>{{ $banner_info->title }}</td>
                            <td><img src="{{ $banner_info->image }}" alt="" style="height: 50px;"></td>
                            <td>{{ $banner_info->link }}</td>
                            <td>{{ $banner_info->status }}</td>
                            <td>
                                <a href="{{ route('banner_edit',$banner_info->id) }}"><i class="fa fa-edit">Edit</i></a>
                                <a href="{{ route('banner_delete', $banner_info->id) }}"><i class="fa fa-trash">Delete</i></a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
            </div>
@endsection

