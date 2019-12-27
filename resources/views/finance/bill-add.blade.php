@extends('layouts.finance-layout')
@section('title','Bill Add| Admin')

@section('main-content')

    <div class="row">
        <div class="col-lg-12">
            <p class="text-center menu-title" style="font-size: 1.5em;"> <strong> Bill {{ isset($bill_edit_info) ? 'settle' : 'Add' }} </strong></p>
            <hr>
        </div>
        <div class="col-lg-12">
            <form action="{{ isset($bill_edit_info) ? route('bill_edit_submit', $bill_edit_info->id) : route('submit') }}" class="form" enctype="multipart/form-data" method="{{ isset($bill_edit_info) ? 'patch' : 'post' }}">
                @csrf
                <div class="form-group row">
                    <div class="col-3">
                        <p class="menu-title" style="font-weight: bold">Select User</p>
                    </div>
                    <div class="col-9">
                        <select name="username" class="form-control">
                            @foreach($user_info as $user_info)
                                <option value="{{$user_info->name}}"> {{$user_info->name}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>



                <div class="form-group row">
                    <div class="col-3">
                        <p class="menu-title" style="font-weight: bold">Bill No</p>
                    </div>
                    <div class="col-9">
                        <input type="text" name="bill_no"class="form-control" value="{{ @$bill_edit_info->bill_no }}" placeholder="Please enter Bill No" required autofocus>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-3">
                        <p class="menu-title" style="font-weight: bold">Select Unit</p>
                    </div>
                    <div class="col-9">
                        <input type="text" name="unit"class="form-control" value="{{ @$bill_edit_info->unit }}" placeholder="Please enter Bill No" required autofocus>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-3">
                        <p class="menu-title" style="font-weight: bold">Select rate</p>
                    </div>
                    <div class="col-9">
                        <input type="text" name="rate"class="form-control" value="{{ @$bill_edit_info->rate }}" placeholder="Please enter Bill No" required autofocus>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-3">
                        <p class="menu-title" style="font-weight: bold">Select User</p>
                    </div>
                    <div class="col-9">
                        <select name="Paid" class="form-control">
                            <option value="yes" selected="{{ isset($bill_edit_info) ? 'selected' : '' }}">Paid</option>
                            <option value="no" selected="{{ isset($bill_edit_info) ? 'selected' : '' }}">Unpaid</option>
                        </select>
                    </div>
                </div>







                <div class="form-group row">
                    <div class="col-3"></div>
                    <div class="col-9">
                        <input type="submit" class="btn btn-success"
                               value="{{ isset($bill_edit_info) ? 'Update Bill' : 'Add Bill' }}">
                    </div>
                </div>
            </form>
        </div>
    </div>

@endsection
