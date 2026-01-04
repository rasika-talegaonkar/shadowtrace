// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts"

// const COLORS = ["#ff4d4f", "#1890ff", "#52c41a"]

// export default function PlatformPie({ data }) {
//   return (
//     <div className="panel">
//       <h3>Platform Distribution</h3>

//       {data.length === 0 ? (
//         <div className="chart-placeholder">No platform data</div>
//       ) : (
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="count"
//               nameKey="platform"
//               outerRadius={90}
//             >
//               {data.map((_, index) => (
//                 <Cell
//                   key={index}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       )}
//     </div>
//   )
// }

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const DATA = [
  { platform: "Telegram", count: 75 },
  { platform: "Dark Web", count: 25 },
]

const COLORS = ["#1890ff", "#ff4d4f"]

export default function PlatformPie() {
  return (
    <div className="panel">
      <h3>Platform Distribution</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={DATA}
            dataKey="count"
            nameKey="platform"
            outerRadius={90}
            innerRadius={45}   // makes it look cleaner & interactive
            paddingAngle={4}
          >
            {DATA.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) => `${value}%`}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
