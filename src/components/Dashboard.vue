<template>
    <div class="container dashboard">
        <div class="row">
            <div class="col-md-12">
                <chart :chart-data="chart_data" :options="chart_options"></chart>
            </div>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-md-12 text-left">
                <h2 class="mb-5">Dashboard</h2>
                <form>
                    <div class="form-group">
                        <label for="inputPassword">Overall Well-being</label>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" v-model="entry.wellbeing"> 1
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" v-model="entry.wellbeing"> 2
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" v-model="entry.wellbeing"> 3
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" v-model="entry.wellbeing"> 4
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" v-model="entry.wellbeing"> 5
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputFrequency">Weight</label>
                        <input class="form-control" type="number" id="inputWeight" v-model="entry.weight" placeholder="Weight">
                    </div>
                    <div class="form-group">
                        <label for="inputFrequency">Frequency</label>
                        <input class="form-control" type="number" id="inputFrequency" v-model="entry.frequency" placeholder="Frequency">
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="" v-model="entry.treatment">
                                Treatment
                            </label>
                        </div>
                    </div>

                    <button class="btn" v-on:click="submit(entry, $event)">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import Chart from './Chart'

export default {
    name: 'dashboard',
    components: { Chart },
    data() {
        return {
            type: 'line',
            entry: {},
            chart_data: {
                labels: [],
                datasets: []
            },
            chart_options: {
                defaultColor: '#7DC5EC',
                fill: false,
                showLine: false,
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        tension: 0,
                        fill: false,
                        borderWidth: 3,
                        borderColor: '#FAAB18',
                        backgroundColor: '#FAAB18',
                        pointRadius: 5,
                        pointHitRadius: 7,
                        pointHoverRadius: 7,
                        pointBackgroundColor: '#FFFFFF',
                    },
                    bar: {
                        backgroundColor: '#6ABDE9',
                        borderColor: '#6ABDE9',
                        barThickness: 5
                    },
                    rectangle: {
                        backgroundColor: '#7DC5EC'
                    }
                },
                title: {
                    display: false,
                    padding: 24,
                    fontSize: 18,
                    fontStyle: 'bold',
                    fontFamily: 'Open Sans'
                },
                legend: {
                    display: true
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Time (Day)'
                        },
                        gridLines: {
                            display: false
                        },
                        stacked: true
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            min: 150
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Weight (Lbs)'
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-weight'
                    }, {
                        ticks: {
                            beginAtZero: false,
                            max: 5
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Wellbeing'
                        },
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-wellbeing',
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }]
                }
            }
        }
    },
    methods: {
        submit: function(entry, event) {
            event.preventDefault()
            // `this` inside methods points to the Vue instance
            console.log('Submit! ', entry)

            // $.ajax({
            //     url: 'http://localhost:3030/entry',
            //     data: entry,
            //     dataType: 'json',
            //     beforeSend: xhr => xhr.setRequestHeader('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyIsInR5cGUiOi…VzIn0.y7xT_72Cd1e3uASyJmMeRVR-ceQ8fH8mNCknhujBHOA'),
            //     method: 'POST'
            // })
            
            this.$http.post('http://localhost:3030/entry', entry).then((res) => {
                console.log('RES ', res)
            })
        }
    },
    created: function() {
        console.log('get ? ', $, this.$http)
        this.$http.get('http://localhost:3030/entry').then(res => res.body).then((res) => {
            let weight_data = []
            let well_being_data = []
            let entry_date = []
            for(let i = 0; i < res.data.length; i++) {
                weight_data.push(res.data[i].weight)
                well_being_data.push(parseInt(res.data[i].wellbeing))
                entry_date.push(moment(res.data[i].createdAt).format('MMMM Do'))
            }

        console.log('? ', well_being_data)
            this.chart_data = {
                labels: entry_date,
                datasets: [
                    {
                        label: 'Weight over time',
                        borderColor: '#FAAB18',
                        backgroundColor: '#FAAB18',
                        data: weight_data,
                        yAxisID: 'y-axis-weight'
                    },
                    {
                        label: 'Wellbeing',
                        borderColor: '#26BCB9',
                        backgroundColor: '#26BCB9',
                        data: well_being_data,
                        yAxisID: 'y-axis-wellbeing'
                    }
                ]
            }
            console.log('get ', res)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
