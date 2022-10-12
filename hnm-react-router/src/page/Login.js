import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const Login = () => { 
  const loginUser = (event) => {
    event.preventDefault(); //form을 쓰게되면 preventDefault를 써줘라.(안쓰면 계속 새로고침 자동으로 돌아감.)
    console.log("login user function issue")
  }
  return ( //type이 submit으로 되있는 경우 onclick으로 주면안됨. onsubmit으로 줘야됨.(form문에서 쓰인다.)
    <Container>
        <Form onSubmit={(event) => loginUser(event)}>
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