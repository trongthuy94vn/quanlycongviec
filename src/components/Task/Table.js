import React from "react";
import { Table, Form } from "react-bootstrap";

import TaskList from "./List";

const TaskTable = props => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Trạng Thái</th>
          <th className="text-center">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <input type="text" className="form-control" />
          </td>
          <td>
            <Form.Group>
              <Form.Control as="select">
                <option value="all">Tất Cả</option>
                <option value="active">Kích Hoạt</option>
                <option value="hide">Ẩn</option>
              </Form.Control>
            </Form.Group>
          </td>
          <td></td>
        </tr>
        <TaskList {...props} />
      </tbody>
    </Table>
  );
};

export default TaskTable;
