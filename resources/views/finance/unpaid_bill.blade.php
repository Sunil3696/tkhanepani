@extends('layouts.finance-layout')
@section('main-content')
    <div class="row">
        <div class="col-lg-9">
            <h3>Bill Settlements</h3>
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
            <table class="table table-striped table-hover">
                <thead>
                <tr>

                    <th>Bill no </th>
                    <th>username</th>
                    <th>Unit</th>
                    <th>Rate</th>
                    <th>Total</th>
                    <th>Paid/Unpaid</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                @foreach($bills_info as $bills_info)
                    <tr>
                        <td>{{ $bills_info->bill_no }}</td>
                        <td>{{ $bills_info->username }}</td>

                        <td>{{ $bills_info->unit }}</td>
                        <td>{{ $bills_info->rate }}</td>
                        <td>{{ $bills_info->total }}</td>
                        <td>{{ $bills_info->paid }}</td>

                        <td>
                            <a href="{{ route('bill_edit',$bills_info->id) }}"><i class="fa fa-edit">Edit</i></a>
                            <a href="{{ route('bill_delete', $bills_info->id) }}"><i class="fa fa-trash">Delete</i></a>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>


    @endsection
