import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <body>
        <div class="row">
          <div class="leftcolumn">
            <div class="card" style={{ height: "100%" }}>
              <h5><i>Metrics Threshold Calculator</i></h5>
              <div class="tab">
                <button class="tablinks" onclick="openCity(event, 'MetricsList')" id="defaultOpen">Metrics List</button>
                <button class="tablinks" onclick="openCity(event, 'Recalculation')">Recalculation</button>
                <button class="tablinks" onclick="openCity(event, 'YAMLStatus')">YAML Status</button>
                <button class="tablinks" onclick="openCity(event, 'GenerateReport')">Generate Report</button>
                <button class="tablinks" onclick="openCity(event, 'Setting')">Setting</button>
              </div>
            </div>
          </div>
        </div>
      </body >
    </div>

  )
}



