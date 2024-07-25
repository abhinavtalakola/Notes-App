const Notes=require('../models/notes.models');

// Creating a new note
async function createNote(req,res){
    try{
        const {text}=req.body;
        const newNote=new Notes({
            text,
            user:req.usertoken,
        });
        await newNote.save();
        res.status(201).json({message:'Note created successfully',newNote});
    }catch(error){
        res.status(500).json({message:'Error creating note.',error});
    }
}

// Getting single note
async function getNote(req,res){
    try{
        const note=await Notes.findById(req.params.id);
        if(!note){
            return res.status(404).json({message:'Note not found.'});
        }
        res.json(note);
    }catch(error){
        res.status(500).json({message:'Error getting note.',error});
    }
}

// Getting all notes
async function getAllNotes(req,res){
    
}

// Updating a note
async function updateNote(req,res){
    
}

// Deleting a note
async function deleteNote(req,res){
    
}

module.exports={
    createNote,
    getNote,
    getAllNotes,
    updateNote,
    deleteNote,
}