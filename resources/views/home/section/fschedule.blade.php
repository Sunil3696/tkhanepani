@extends('layouts.master')

@section('main-content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped table-bordered ">
                    <thead>
                    <tr>
                        <th>Ward No</th>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THS</th>
                        <th>FRI</th>
                        <th>SAT</th>
                    </tr>
                    </thead>
                    <tbody style="color: green;">
                    @foreach($schedule_data as $schedule_data)
                        <tr>
                            <td>{{$schedule_data->Ward_number}}</td>
                            <td>{{$schedule_data->Sunday}}</td>
                            <td>{{$schedule_data->Monday}}</td>
                            <td>{{$schedule_data->Tuesday}}</td>
                            <td>{{$schedule_data->Wednesday}}</td>
                            <td>{{$schedule_data->Thursday}}</td>
                            <td>{{$schedule_data->Friday}}</td>
                            <td>{{$schedule_data->Saturday}}</td>
                        </tr>
                        @endforeach
                    </tbody>

                </table>
                <p>Note: Schedule May differ on the situation of load-schedding and other Natural disasters Situation</p>
            </div>
        </div>
    </div>
    @endsection
