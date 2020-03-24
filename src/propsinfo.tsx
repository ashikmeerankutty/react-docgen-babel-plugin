import React from "react";

type PropsInfoProps  = {
  component: any
}
type A = [string,any];

export const PropsInfo = ({ component }: PropsInfoProps) => {
  return (
    <div>
      <h5>Props Table</h5>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {Object.entries(component.__docsInfo.props).map(([key, value]: A) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.type.name}</td>
              <td>{value.required ? "true" : "false"}</td>
              <td>{value.description}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
};