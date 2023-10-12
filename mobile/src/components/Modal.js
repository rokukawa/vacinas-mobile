import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const DeleteConfirmationModal = ({ isVisible, onCancel, onDelete }) => {
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true} onRequestClose={onCancel}>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalText}>Tem certeza que deseja{'\n'} remover essa vacina?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={onDelete}>
                        <Text style={styles.buttonText}>SIM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
                        <Text style={styles.buttonText}>CANCELAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '75%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#3F92C5',
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#FD7979',
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
};

export default DeleteConfirmationModal;
