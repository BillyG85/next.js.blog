import {Row, Col} from 'antd'
import Link from "next/link"

export default function BlogHeadline() {
  return (
    <Row 
      align="middle"
      style={{
        height: 400,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1 style={{
          fontSize: 70,
          fontWeight: 'bold',
          }}
        >
          B's Blog
        </h1>
        <p style={{
          fontSize: 24
        }}
        >
          Welcome
        </p>

      </Col>

    </Row>
  )
}