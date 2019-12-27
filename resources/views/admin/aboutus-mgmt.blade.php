@extends('layouts.admin-dashboard')

@section('main-content')
    <div class="row">
        <div class="col-lg-12">
            <h3>About US  Management</h3>
            @if(session('status'))
                <div class=" alert alert-success" style="margin: 0px; padding: 0px;">
                    {{ session('status')  }}
                </div>
            @endif
        </div>

    </div>

    <hr>

    <div class="row">
    <div class="col-lg-12">
        <form action="{{route('aboutus_update')}}" class="form" method="post">
            @csrf
            <div class="form-group row">
                <div class="col-3">
                    <p class="menu-title" style="font-weight: bold"> Title</p>
                </div>
                <div class="col-9">
                    <input type="text" name="title"class="form-control" value="{{ @$Banner_edit_info->title }}" placeholder="Please enter  the Title of Page" required autofocus>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-3">
                    <p class="menu-title" style="font-weight: bold">Content</p>
                </div>
                <div class="col-9">
                    <textarea name="content" id="" cols="30" rows="10" placeholder="Please enter About us Content Here" class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-3">

                </div>
                <div class="col-9">
                    <input type="submit" class="btn btn-outline-primary" value="Update">
                </div>
            </div>
        </form>

    </div>
    </div>



    @endsection
