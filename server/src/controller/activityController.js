import Activity from "../models/activity.js";

export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find()
        return res.status(200).json({ activities })
    } catch (error) {
        return res.status(400).json({ message: "fatal error", error: error.message })
    }
}

// getActivity

export const getActivity = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        return res.status(200).json({ activity })
    } catch (error) {
        return res.status(400).json({ message: "fatal error", error: error.message })
    }
}

export const addActivity = async (req, res) => {
    const { name, status } = req.body;
    if(!name){
        return res.status(400).json({ error: "error" })
    }
    try {
        const activity = new Activity({ name, status });
        const addActivity = await activity.save()
        return res.status(200).json({addActivity})
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

export const updateActivity = async (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;

    try {
        const updActivity = {
            name,
            status
        }
        const updatedActivity = await Activity.findOneAndUpdate(
            { _id: id },
            { $set: updActivity },
            { new: true }
        );
        return res.status(200).json({updatedActivity})
    } catch (error) {
        return res.status(400).json({ message: "fatal error", error: error.message })   
    }
}

export const deleteActivity = async (req, res) => {
    const { id } = req.params;
    try {
        const delActivity = await Activity.findOneAndDelete({ _id: id })
        return res.status(400).json(delActivity)
    } catch (error) {
        return res.status(400).json({ message: "fatal error", error: error.message });
    }
}


