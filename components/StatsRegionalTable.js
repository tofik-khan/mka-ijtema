import React from "react";

export default function StatsRegionalTable({ majalis, region }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th></th>
          <th colSpan="2" className="text-center">
            Atfal
          </th>
          <th colSpan="2" className="text-center">
            Khuddam
          </th>
        </tr>
        <tr>
          <th>Majlis</th>
          <th>Count</th>
          <th>Target</th>
          <th>Count</th>
          <th>Target</th>
        </tr>
      </thead>
      <tbody>
        {majalis.map((majlis, i) => (
          <tr key={`${region}_${majlis.name}_Row`}>
            <td>{majlis.name}</td>
            <td className="text-center">{majlis.atfalCount}</td>
            <td className="text-center">{majlis.atfalTarget}</td>
            <td className="text-center">{majlis.khuddamCount}</td>
            <td className="text-center">{majlis.khuddamTarget}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
