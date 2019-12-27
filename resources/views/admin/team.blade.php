@extends('layouts.admin-dashboard')
@section('main-content')
    <div class="row">
        <div class="col-lg-9">
            <h3>Team Management</h3>
            @if(session('status'))
                <div class=" alert alert-success" style="margin: 0px; padding: 0px;">
                    {{ session('status')  }}
                </div>
            @endif
        </div>
        <div class="col-lg-3">
            <a href="{{ route('team-add') }}" class="btn btn-outline-info"><i class="mdi mdi-plus menu-icon"></i> Add
                Team Member</a>

        </div>

    </div>
    <hr>

    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped table-hover">
                <thead>
                <tr>

                    <th>Name</th>
                    <th>Image</th>
                    <th>Designation</th>
                    <th>fb</th>
                    <th>status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                @foreach($Team_data as $Team_data)
                    <tr>
                        <td>{{ $Team_data->name }}</td>
                        <td><img src="{{ $Team_data->image }}" alt="" style="height: 50px;"></td>
                        <td>{{ $Team_data->designation }}</td>
                        <td>{{ $Team_data->fb }}</td>
                        <td>{{ $Team_data->status }}</td>
                        <td>
                            <a href="{{ route('team-edit',$Team_data->id) }}"><i class="fa fa-edit">Edit</i></a>
                            <a href="{{ route('banner_delete', $Team_data->id) }}"><i class="fa fa-trash">Delete</i></a>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
    @endsection
