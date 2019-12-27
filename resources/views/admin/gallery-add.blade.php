@extends('layouts.admin-dashboard')
@section('title' ,'Image Add Gallery')

@section('main-content')
	<div class="row">
		<div class="col-lg-12">
			<p class="text-center menu-title" style="font-size: 1.5em;"> <strong> Image {{ isset($Gallery_edit_info) ? 'Update' : 'Add' }} </strong></p>
			<hr>	
		</div>
		<div class="col-12">
			<form action="{{ isset($Gallery_edit_info) ? route('gallery_edit_submit' , $Gallery_edit_info->id) : route('gallery_submit') }}" class="form"  enctype="multipart/form-data"  method="{{ isset($Gallery_edit_info) ? 'patch' : 'post' }}">
				@csrf
				
				<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Image Title</p>
                </div>		
                <div class="col-9">
				 <input type="text" name="title"class="form-control" value="{{ @$Gallery_edit_info->title }}" placeholder="Please enter the Image Title" required autofocus>
				</div>	
			</div>
		</div>
		<div class="col-12">
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Image Description</p>
                </div>		
                <div class="col-9">
				 <input type="text" name="description"class="form-control" value="{{ @$Gallery_edit_info->description }}" placeholder="Please enter the Image Description" required>
				</div>	
			</div>
		</div>
		<div class="col-12">
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Image Date</p>
                </div>		
                <div class="col-9">
				 <input type="date" name="taken_at"class="form-control" value="{{ @$Gallery_edit_info->taken_at }}">
				</div>	
			</div>
		</div>

		<div class="col-12">
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
		</div>


		<div class="col-12">
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Image File</p>
                </div>	

                <div class="col-9">
				<div class="input-group">
				   <span class="input-group-btn">
				     <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
				       <i class="fa fa-picture-o"></i> Choose
				     </a>
				   </span>
				   	<input id="thumbnail" class="form-control" type="text" name="filepath" value="{{ @$Gallery_edit_info->image }}" > 
				 </div>
				 	<img id="holder" style="margin-top:15px;max-height:100px;" src="{{ @$Gallery_edit_info->image }}">
				</div>
				</div>	
				</div>

				<div class="col-12">
			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold"></p>
                </div>		
                <div class="col-9">
				<input type="submit" name="" class="btn btn-success" value="{{ isset($Gallery_edit_info) ? 'Update Image' : 'Add Image' }}">
				</div>	
			</div>
			</form>


	</div>


@endsection



@section('script')
    <script src="/vendor/laravel-filemanager/js/lfm.js"></script>
    <script>
        $('#lfm').filemanager('image');
    </script>
@endsection