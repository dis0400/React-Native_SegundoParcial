const { db } = require('../config/firebaseConfig');

exports.addImage = async (image) => {
  try {
    const docRef = await db.collection('images').add(image);
    return `Imagen añadida con el ID de: ${docRef.id}`;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getImages = async () => {
  try {
    const snapshot = await db.collection('images').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getImageById = async (id) => {
  try {
    const doc = await db.collection('images').doc(id).get();
    if (!doc.exists) {
      throw new Error('No document!');
    }
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateImage = async (id, updatedData) => {
  try {
    await db.collection('images').doc(id).update(updatedData);
    return 'Imagen actualizada yei!';
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteImage = async (id) => {
  try {
    await db.collection('images').doc(id).delete();
    return 'Imagen eliminada buhu';
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getImagesByCategory = async (category) => {
  try {
    const snapshot = await db.collection('images').where('category', '==', category).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getImagesByYear = async (year) => {
  try {
    const snapshot = await db.collection('images').where('year', '==', year).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getImagesByMonth = async (month) => {
  try {
    const snapshot = await db.collection('images').where('month', '==', month).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(error.message);
  }
};
