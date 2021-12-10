import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

const Container = styled.div`
  display: flex;
`;

class App extends React.Component {
  state = initialData;

  onDragStart = start => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
    });
  };

  onDragEnd = result => {
    this.setState({
      homeIndex: null,
    });

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const home = this.state.columns[source.droppableId];
    const foreign = this.state.columns[destination.droppableId];

    if (home === foreign) {
      const newTaskIds = Array.from(home.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newHome.id]: newHome,
        },
      };

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>

          <h2>&nbsp;My Emotional Work Sheet</h2><br /><br />
          <h2>&nbsp;Section #1 - It's all about you!</h2><br /><br />
           &nbsp; Answer the questions below and drag the feeling and need words to the correct column. 
           <br /><br />
           &nbsp; Explain the situation factually <br />  
   
          &nbsp;&nbsp;<textarea id="w3review" name="w3review" rows="4" cols="97">
          This where you type info about what you want to type.
          </textarea>
          <br /><br />
          &nbsp;&nbsp; Tell me more about the facts   <br />
          &nbsp;<textarea id="w3review" name="w3review" rows="4" cols="97" border-radius="20px">
          type more stuff here
          </textarea>
          <br />
    
          <br />
          &nbsp; Now consider which feelings are at issue:
          <br />
        <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {this.state.columnOrder.map((columnId, index) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId],
            );

            // this where you can set a condtion for dragging, like you can only drag forward.    const isDropDisabled = index < this.state.homeIndex;
            const isDropDisabled = false;
            
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                isDropDisabled={isDropDisabled}
              />
            );
          })}
        </Container>
      </DragDropContext>
      <br />
      &nbsp; Now consider which needs are at issue:
      <br />
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <Container>
            {this.state.columnOrder2.map((columnId, index) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(
                taskId => this.state.tasks[taskId],
              );

              // this where you can set a condtion for dragging, like you can only drag forward.    const isDropDisabled = index < this.state.homeIndex;
              const isDropDisabled = false;
              
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  isDropDisabled={isDropDisabled}
                />
              );
            })}
          </Container>
        </DragDropContext>
        <br />
        &nbsp; Time to type Stratigies<br />
        &nbsp;&nbsp;<textarea id="w3review" name="w3review" rows="4" cols="97">
        This where you type Stratigies about what you want to type.</textarea>
        <br /><br /><br />


   
          <h2>&nbsp;Section #2 - It's all about them!</h2><br /><br />
           &nbsp; Answer the questions below and drag the feeling and need words to the correct column. 
           <br /><br />
           &nbsp; Explain the situation factually <br />  
   
          &nbsp;&nbsp;<textarea id="w3review" name="w3review" rows="4" cols="97">
          This where you type info about what you want to type.
          </textarea>
          <br /><br />
          &nbsp;&nbsp; Tell me more about the facts   <br />
          &nbsp;<textarea id="w3review" name="w3review" rows="4" cols="97" border-radius="20px">
          type more stuff here
          </textarea>
          <br />
    
          <br />
          &nbsp; Now consider which feelings are at issue:
          <br />
        <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {this.state.columnOrder.map((columnId, index) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId],
            );

            // this where you can set a condtion for dragging, like you can only drag forward.    const isDropDisabled = index < this.state.homeIndex;
            const isDropDisabled = false;
            
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                isDropDisabled={isDropDisabled}
              />
            );
          })}
        </Container>
      </DragDropContext>
      <br />
      &nbsp; Now consider which needs are at issue:
      <br />
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <Container>
            {this.state.columnOrder2.map((columnId, index) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(
                taskId => this.state.tasks[taskId],
              );

              // this where you can set a condtion for dragging, like you can only drag forward.    const isDropDisabled = index < this.state.homeIndex;
              const isDropDisabled = false;
              
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  isDropDisabled={isDropDisabled}
                />
              );
            })}
          </Container>
        </DragDropContext>
        <br />
        &nbsp; Time to type Stratigies<br />
        &nbsp;&nbsp;<textarea id="w3review" name="w3review" rows="4" cols="97">
        This where you type Stratigies about what you want to type.</textarea>
        <br /><br /><br />


      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
