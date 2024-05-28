<template>
    <section class="statistics" v-if="chartData.labels && chartData.datasets">
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </section>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import { bitcoinService } from '../services/bitcoin.service.js'

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {},
            chartOptions: {
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Market Price History',
                    },
                },
                responsive: true, // Add other chart options as needed
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: (value)=> {
                                return '$' + value
                            },
                        },
                    },
                    x: {
                        ticks: {
                            maxTicksLimit: 10,
                            autoSkip: false,
                            maxRotation: 30,
                            minRotation: 30,

                        },
                    },
                },
            },
        }
    },
    async created() {
        try {
            const data = {}
            const marketPriceHistory = await bitcoinService.getMarketPriceHistory()
            const labels = marketPriceHistory.map((val) => val.date).slice(0, 10)
            const datasets = [
                { borderWidth: 1, label: '# of Votes', data: marketPriceHistory.map((val) => val.price).slice(0, 10) },
            ]
            data.labels = labels
            data.datasets = datasets
            this.chartData = data
        } catch (err) {
            console.error(err)
            throw err
        }
    },
}
</script>

<style>
.statistics {
    margin-block: 60px;
}
</style>
