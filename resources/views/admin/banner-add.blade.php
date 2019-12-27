@extends('layouts.admin-dashboard')
@section('title','Banner Add| Admin')

@section('main-content')

	<div class="row">
		<div class="col-lg-12">
			<p class="text-center menu-title" style="font-size: 1.5em;"> <strong> Banner {{ isset($Banner_edit_info) ? 'Update' : 'Add' }} </strong></p>
			<hr>
		</div>
		<div class="col-lg-12">
			<form action="{{ isset($Banner_edit_info) ? route('banner_edit_submit', $Banner_edit_info->id) : route('banner-submit') }}" class="form" enctype="multipart/form-data" method="{{ isset($Banner_edit_info) ? 'patch' : 'post' }}">
				@csrf
				<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Banner Title</p>
                </div>
                <div class="col-9">
				 <input type="text" name="title"class="form-control" value="{{ @$Banner_edit_info->title }}" placeholder="Please enter  the Title of Banner" required autofocus>
				</div>
			</div>



			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Banner Link</p>
                </div>
                <div class="col-9">
				 <input type="text" name="link"class="form-control" value="{{ @$Banner_edit_info->link }}" placeholder="Please enter the Banner Link" required autofocus>
				</div>
			</div>

			<div class="form-group row">
				<div class="col-3">
				<p class="menu-title" style="font-weight: bold">Status</p>
                </div>
                <div class="col-9">
				 	<select name="status" class="form-control">
						 <option value="active" > Active</option>
	                	 <option value="inactive">Inactive</option>
	             	</select>
				</div>
			</div>


			<div class="form-group row">
				<div class="col-3">
					<p class="menu-title" style="font-weight: bold">Banner Image</p>
				</div>
				<div class="col-9">
					<div class="input-group">
   <span class="input-group-btn">
     <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
       <i class="fa fa-picture-o"></i> Choose
     </a>
   </span>
   <input id="thumbnail" class="form-control" type="text" name="filepath" value="{{ @$Banner_edit_info->image }}" >
 </div>
 <img id="holder" style="margin-top:15px;max-height:100px;" src="{{ @$Banner_edit_info->image }}">
				</div>
			</div>



                        <div class="form-group row">
                            <div class="col-3"></div>
                            <div class="col-9">
                                <input type="submit" class="btn btn-success"
                                       value="{{ isset($Banner_edit_info) ? 'Update Banner' : 'Add Banner' }}">
                            </div>
                        </div>
			</form>
		</div>
	</div>

@endsection

@section('script')
    <script src="/vendor/laravel-filemanager/js/lfm.js"></script>
    <script>
        $('#lfm').filemanager('image');
    </script>
@endsection
