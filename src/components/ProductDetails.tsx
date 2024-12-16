import { useState } from "react";
import { Badge } from "./Badge";
import { DetailRow } from "./DetailRow";
import { TabButton } from "./TabButton";
import { FileListItem } from "./FileListItem";

type TabType = "description" | "investments" | "contacts";

interface TabConfig {
  id: TabType;
  label: string;
}

const TABS: TabConfig[] = [
  { id: "description", label: "Описание" },
  { id: "investments", label: "Вложения" },
  { id: "contacts", label: "Контакты" },
];

const FILES = [
  {
    name: "Обучающая презентация",
    date: "31.07.2024 16:50:55",
    size: "20 Kb",
    type: "ppt",
  },
  {
    name: "Обучающая презентация",
    date: "31.07.2024 16:50:55",
    size: "20 Kb",
    type: "pdf",
  },
  {
    name: "Обучающая презентация",
    date: "31.07.2024 16:50:55",
    size: "20 Kb",
    type: "doc",
  },
  {
    name: "Обучающая презентация",
    date: "31.07.2024 16:50:55",
    size: "20 Kb",
    type: "xls",
  },
] as const;

export function ProductDetails() {
  const [activeTab, setActiveTab] = useState<TabType>("description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="text-gray-300 space-y-4 text-sm">
            <p>
              Стратегический консалтинг для государственного и некоммерческого
              сектора - это проект по решению стратегических задач развития
              региона или города, включая анализ форма оказания услуг или
              научно-исследовательская работа.
            </p>
            <p>
              Возможные варианты - комплексное стратегическое развитие региона
              или города, включая анализ экономических показателей, определение
              векторов социальной промышленности, АПК, туризма и других
              направлений, а также проработка отдельных функциональных
              направлений деятельности органов власти, например привлечение
              инвестиций или цифровизация - может проводиться актуализация
              существующей стратегии, или реализовываться один из этапов
              комплексной разработки (например, диагностика) или разработка
              дорожной карты по реализации стратегии.
            </p>
          </div>
        );
      case "investments":
        return (
          <div className="space-y-2">
            {FILES.map((file, index) => (
              <FileListItem
                key={index}
                name={file.name}
                date={file.date}
                size={file.size}
                type={file.type}
              />
            ))}
          </div>
        );
      case "contacts":
        return (
          <div className="text-gray-300 space-y-4 text-sm">
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <span>Руководитель проекта</span>
              <span>Иванов И.И.</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <span>Email</span>
              <span>ivanov@example.com</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <span>Телефон</span>
              <span>+7 (999) 123-45-67</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="px-4 py-6 pb-10">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Стратегический консалтинг
      </h2>

      <div className="flex items-center flex-col space-y-4 mb-6">
        <DetailRow label="Статус" value="Тираж" />
        <DetailRow label="Индустрия" value={<Badge>Здоровье</Badge>} />
        <DetailRow
          label="Сегмент"
          value={<Badge variant="warning">B2G</Badge>}
        />
        <DetailRow label="Категории" value="ФТ, Продукты AI, Полка" />
        <DetailRow label="Тип планирования" value="По территориям" />
      </div>

      <div className="mb-6 flex justify-center">
        <div className="flex bg-gray-800/50 p-1 rounded-xl md:w-[700px] w-[400px]">
          {TABS.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
}
