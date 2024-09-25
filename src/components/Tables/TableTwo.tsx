"use client";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { Package } from "@/types/package";

// Mock demand data

const chatData = [
  {
    avatar: "/images/user/user-01.png",
    name: "Ahmed El Fassi",
    text: "3 Demandes",
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Zineb Amrani",
    text: "2 Demandes",
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Youssef Benjelloun",
    text: "5 Demandes",
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Fatima Zahra Chraibi",
    text: "1 Demandes",
    textCount: 0,
    dot: 6,
  },
  {
    avatar: "/images/user/user-01.png",
    name: "Karim Maroudi",
    text: "3 Demandes",
    textCount: 0,
    dot: 3,
  },
];

const demandData: Package[] = [
  {
    name: "Moyens Generaux",
    invoiceDate: "2 Aout, 2024",
    status: "Approuvée",
  },
  {
    name: "Moyens Generaux",
    invoiceDate: "1 Sep, 2024",
    status: "En Cours",
  },
  {
    name: "Moyens Generaux",
    invoiceDate: "29 Aout, 2024",
    status: "Refusée",
  },
  {
    name: "Moyens Generaux",
    invoiceDate: "3 Sep, 2024",
    status: "En Cours",
  },
  {
    name: "Moyens Generaux",
    invoiceDate: "15 Sep, 2024",
    status: "Approuvée",
  },
];

// Different sets of items
const itemsSet1 = [
  { itemId: 1, name: "Chaise de Bureau", quantity: 3 },
  { itemId: 2, name: "Cahier", quantity: 2 },
  { itemId: 3, name: "Lampe de Bureau", quantity: 6 },
  { itemId: 4, name: "Armoire de Rangement", quantity: 2 },
  { itemId: 5, name: "Stylo à Bille", quantity: 5 },
];

const itemsSet2 = [
  { itemId: 1, name: "Chaise de Bureau", quantity: 4 },
  { itemId: 2, name: "Lampe de Bureau", quantity: 2 },
];

const itemsSet3 = [
  { itemId: 1, name: "Table de Réunion", quantity: 1 },
  { itemId: 2, name: "Cahier", quantity: 3 },
  { itemId: 3, name: "Classeur", quantity: 2 },
];

const itemsSet4 = [
  { itemId: 1, name: "Chaise de Bureau", quantity: 5 },
  { itemId: 2, name: "Cahier", quantity: 1 },
  { itemId: 3, name: "Stylo à Bille", quantity: 7 },
];

const itemsSet5 = [
  { itemId: 1, name: "Chaise de Bureau", quantity: 3 },
  { itemId: 2, name: "Cahier", quantity: 2 },
  { itemId: 3, name: "Lampe de Bureau", quantity: 1 },
  { itemId: 4, name: "Table de Réunion", quantity: 2 },
];

const TableTwo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItems, setSelectedItems] = useState(itemsSet1);

  const handleOpenModal = (items: typeof itemsSet1) => {
    setSelectedItems(items);
    onOpen();
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[180px] px-4 py-4 font-medium text-black dark:text-white">
                Demandeur
              </th>
              <th className="min-w-[180px] px-4 py-4 font-medium text-black dark:text-white">
                Date de Réception
              </th>
              <th className="min-w-[180px] px-4 py-4 font-medium text-black dark:text-white">
                Numéro D'articles
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {demandData.map((demand, key) => {
              // Select the correct set of items for each row
              const currentItems =
                key === 0
                  ? itemsSet1
                  : key === 1
                  ? itemsSet2
                  : key === 2
                  ? itemsSet3
                  : key === 3
                  ? itemsSet4
                  : itemsSet5;

              return (
                <tr key={key}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {chatData[key % chatData.length].name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {demand.invoiceDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {currentItems.length}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button
                        className="hover:text-primary"
                        onClick={() => handleOpenModal(currentItems)}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                            fill=""
                          />
                          <path
                            d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                            fill=""
                          />
                        </svg>
                      </button>
                      <button className="hover:text-success">
                        <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                          d="M9 19.414L3.293 13.707L4.707 12.293L9 16.586L19.293 6.293L20.707 7.707L9 19.414Z"
                          fill="currentColor"
                        />
                        </svg>
                      </button>
                      <button className="hover:text-danger">
                        <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details de la Demande - Moyens Generaux</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nom de l'Article</Th>
                  <Th>Quantité</Th>
                </Tr>
              </Thead>
              <Tbody>
                {selectedItems.map((item) => (
                  <Tr key={item.itemId}>
                    <Td>{item.name}</Td>
                    <Td>{item.quantity}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default TableTwo;
