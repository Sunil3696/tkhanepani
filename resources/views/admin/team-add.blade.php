@extends('layouts.admin-dashboard')
@section('title','Team Member Add| Admin')

@section('main-content')

    <div class="row">
        <div class="col-lg-12">
            <p class="text-center menu-title" style="font-size: 1.5em;"> <strong> Team Member {{ isset($Team_edit_info) ? 'Update' : 'Add' }} </strong></p>
            <hr>
        </div>
        <div class="col-lg-12">
            <form action="{{ isset($Team_edit_info) ? route('team_edit_submit', $Team_edit_info->id) : route('team-submit') }}" class="form" enctype="multipart/form-data" method="{{ isset($Team_edit_info) ? 'patch' : 'post' }}">
                @csrf
                <div class="form-group row">
                    <div class="col-3">
                        <p class="menu-title" style="font-weight: bold">Member Name</p>
                    </div>
                    <div class="col-9">
                        <input type="text" name="name"class="form-control" value="{{ @$Team_edit_info->name }}" placeholder="Please enter  the Name of Banner" required autofocus>
                    </div>
                </div>



                <div class="form-group row">
                    <div class="col-3">
                        <p class="menu-title" style="font-weight: bold">Designation</p>
                    </div>
                    <div class="col-9">
                        <input type="text" name="designation"class="form-control" value="{{ @$Team_edit_info->designation }}" placeholder="Please enter the designation" required autofocus>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-3">
                        <p class="menu-title" style="font-weight: bold">Fb Link</p>
                    </div>
                    <div class="col-9">
                        <input type="text" name="fb"class="form-control" value="{{ @$Team_edit_info->fb }}" placeholder="Please enter the FB Link" required autofocus>
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
                            <input id="thumbnail" class="form-control" type="text" name="filepath" value="{{ @$Team_edit_info->image }}" >
                        </div>
                        <img id="holder" style="margin-top:15px;max-height:100px;" src="{{ @$Team_edit_info->image }}">
                    </div>
                </div>



                <div class="form-group row">
                    <div class="col-3"></div>
                    <div class="col-9">
                        <input type="submit" class="btn btn-success"
                               value="{{ isset($Team_edit_info) ? 'Update Banner' : 'Add Banner' }}">
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
