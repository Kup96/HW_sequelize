import { Task } from './../db/models';

//id??? req.params.userId

export async function createTask(req, res, next) {
  try {
    const newTask = await Task.create(req.body);
    if (newTask) {
      return res.status(201).send(newTask);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}


export async function deleteTask(req, res, next) {
    try {
        const deleteTask = await Task.destroy({
          where: {
            id: req.params.taskId,
          },
        });
        if (deleteTask) {
          return res.status(201).send(deleteTask);
        }
        return next(new Error());
      } catch (e) {
        next(e);
      }
    }



export async function getTask(req, res) {
    try {
      const foundTask = await User.findOne({where: {id: req.params.taskId}});
      if (foundTask) {
        return res.status(201).send(foundTask);
      }
      return next(new Error());
    } catch (e) {
      next(e);
    }
  }
