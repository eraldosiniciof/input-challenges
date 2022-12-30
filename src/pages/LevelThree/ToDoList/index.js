import React, { useState } from 'react';

import { Icon } from '~/components/Icon';

import {
  Container,
  MainBox,
  HeaderBox,
  TitleHeaderBox,
  TitleHeader,
  InputBox,
  InputText,
  InputButton,
} from './stylesHeader';

import {
  BoxClick,
  CheckAndTask,
  ListTaskBox,
  TaskBox,
  TaskHeaderBox,
  TaskHeaderText,
  TaskItem,
  TaskText,
} from './stylesTasks';

export function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [createdTask, setCreatedTask] = useState('');

  function handleCreate(task) {
    const obj = {
      id: tasks?.length > 0 ? tasks?.length + 1 : 1,
      task,
      resolved: false,
    };

    setTasks((prevState) => [...prevState, obj]);
  }

  function handleChange(text) {
    setCreatedTask(text);
  }

  function handleStatus(item) {
    const indexTask = tasks.indexOf(item);
    const tempTasks = tasks;

    tempTasks[indexTask].resolved = !item.resolved;

    setTasks(tempTasks);
  }

  function handleRemove(item) {
    const indexTask = tasks.indexOf(item);
    const tempTasks = tasks;

    const shouldRemove = confirm(
      `Tem certeza que deseja excluir a tarefa: ${item.task}?`
    );

    if (shouldRemove) {
      tempTasks.splice(indexTask, 1);
      setTasks(tempTasks);
    }
  }

  return (
    <Container>
      <MainBox>
        <HeaderBox>
          <TitleHeaderBox>
            <Icon name="task" />
            <TitleHeader>Adicionar uma tarefa</TitleHeader>
          </TitleHeaderBox>
          <InputBox>
            <InputText
              onChange={({ target }) => handleChange(target.value)}
              placeholder="Descreva a Tarefa"
            ></InputText>
            <InputButton onClick={() => handleCreate(createdTask)}>
              Criar Tarefa
            </InputButton>
          </InputBox>
        </HeaderBox>

        <TaskBox>
          <TaskHeaderBox>
            <Icon name="board" />
            <TaskHeaderText>Quadro de Tarefas</TaskHeaderText>
          </TaskHeaderBox>

          {tasks?.length > 0 ? (
            <ListTaskBox>
              {tasks?.map((data) => (
                <TaskItem
                  key={`key-${data?.id}/${new Date().getTime()}`}
                  resolved={data?.resolved}
                >
                  <BoxClick onClick={() => handleStatus(data)}>
                    <CheckAndTask>
                      {data?.resolved ? (
                        <Icon name="check" />
                      ) : (
                        <Icon name="frame" />
                      )}
                      <TaskText resolved={data?.resolved}>
                        {data?.task}
                      </TaskText>
                    </CheckAndTask>
                  </BoxClick>
                  <BoxClick onClick={() => handleRemove(data)}>
                    <Icon name="remove" />
                  </BoxClick>
                </TaskItem>
              ))}
            </ListTaskBox>
          ) : (
            <ListTaskBox>Sua lista de tarefas está vazia</ListTaskBox>
          )}
        </TaskBox>
      </MainBox>
    </Container>
  );
}
