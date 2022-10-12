import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const Login = () => {
  return (
    <Container>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일을 입력해주세요.</Form.Label>
        <Form.Control type="email" placeholder="이메일" />
        <Form.Text className="text-muted">
          귀하의 이메일은 안전하게 보관됩니다.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호를 입력해주세요.</Form.Label>
        <Form.Control type="password" placeholder="비밀번호" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="체크를 해주세요." />
      </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
  )
}

export default Login