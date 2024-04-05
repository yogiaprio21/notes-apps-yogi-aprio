import "./note-card.js";
import "./script.js";

const BASE_URL = "https://notes-api.dicoding.dev/v2";

// 1. Menambahkan catatan baru
async function createNote(note) {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });

    if (!response.ok) {
      throw new Error('Gagal menambahkan catatan. Status: ' + response.status);
    }

    const data = await response.json();
    console.log('Catatan berhasil ditambahkan:', data);
    return data; // Return the created note
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    throw error;
  }
}

// 2. Mendapatkan dan menampilkan daftar catatan
async function getNotes() {
  try {
    const response = await fetch(`${BASE_URL}/notes`);

    if (!response.ok) {
      throw new Error('Gagal mengambil catatan');
    }

    const data = await response.json();
    console.log('Daftar catatan:', data);
    return data; // Return the list of notes
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    throw error;
  }
}

// 3. Menghapus catatan
async function deleteNote(noteId) {
  try {
    const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Gagal menghapus catatan');
    }

    const data = await response.json();
    console.log('Catatan berhasil dihapus:', data);
    return data; // Return the deleted note
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    throw error;
  }
}

// Example usage:
async function exampleUsage() {
  try {
    // Create a new note
    const newNote = await createNote({
      title: "New Note",
      content: "This is a new note."
    });
    console.log("New Note:", newNote);

    // Get the list of notes
    const notes = await getNotes();
    console.log("Notes:", notes);

    // Delete a note (assuming there's an ID)
    const deletedNote = await deleteNote(noteId);
    console.log("Deleted Note:", deletedNote);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

// Call the example usage function to see how these functions work
exampleUsage();
