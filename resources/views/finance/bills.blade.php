@extends('finance.dashboard')

@section('main-content')
    <div class="row">
        <div class="col-lg-9">
            <h3>Bill Management</h3>
            @if(session('status'))
                <div class=" alert alert-success" style="margin: 0px; padding: 0px;">
                    {{ session('status')  }}
                </div>
            @endif
        </div>
        <div class="col-lg-3">
            <a href="{{ route('bill-add') }}" class="btn btn-outline-info"><i class="mdi mdi-plus menu-icon"></i> Add
                Bill</a>

        </div>

    </div>
    <hr>

    <div class="row">
        <div class="col-lg-12">
            <form action="{{ route('view_bill') }}" method="post">
                @csrf
                <div class="form-group row">
                    <div class="col-3">
                        <p class="menu-title" style="font-weight: bold">Select Customer</p>
                    </div>
                    <div class="col-9">
                        <select name="username" id="" class="form-control">
                            @foreach($bill_info as $bill_info)
                                <option value="{{ $bill_info->username }}">{{ $bill_info->username }}</option>

                                @endforeach
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-3"></div>
                    <div class="col-9">
                        <input type="submit" class="btn btn-success"
                               value="View Stmt">
                    </div>
                </div>

            </form>
        </div>
    </div>
    @endsection
